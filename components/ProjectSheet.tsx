"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  ArrowUpRight,
  Lock,
  Github,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import ProjectScreenshots from "./ProjectScreenshots";
import type { Project } from "@/data/projects";

type ProjectSheetProps = {
  project: Project | null;
  onClose: () => void;
};

const SNAP_COLLAPSED = 60;
const SNAP_EXPANDED = 92;
const CLOSE_THRESHOLD = SNAP_COLLAPSED * 0.6; // 36vh

export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  const [renderedProject, setRenderedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heightVh, setHeightVh] = useState(SNAP_COLLAPSED);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const dragState = useRef<{ startY: number; startHeight: number } | null>(null);

  useEffect(() => {
    if (project) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRenderedProject(project);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeightVh(SNAP_COLLAPSED);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(false);
      const timeout = setTimeout(() => setRenderedProject(null), 300);
      return () => clearTimeout(timeout);
    }
  }, [project]);

  useEffect(() => {
    if (!isVisible) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowHint(true);
    const t = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(t);
  }, [isVisible]);

  useEffect(() => {
    if (!project) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [project, onClose]);

  useEffect(() => {
    if (!renderedProject) return;
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousOverflow;
    };
  }, [renderedProject]);

  const handleDragStart = (e: React.PointerEvent) => {
    dragState.current = { startY: e.clientY, startHeight: heightVh };
    setIsDragging(true);
    setShowHint(false);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleDragMove = (e: React.PointerEvent) => {
    if (!dragState.current) return;
    const deltaY = dragState.current.startY - e.clientY;
    const deltaVh = (deltaY / window.innerHeight) * 100;
    const next = Math.min(
      SNAP_EXPANDED,
      Math.max(0, dragState.current.startHeight + deltaVh)
    );
    setHeightVh(next);
  };

  const handleDragEnd = (e: React.PointerEvent) => {
    if (!dragState.current) return;

    const target = e.target as HTMLElement;
    const wasClosed = heightVh < CLOSE_THRESHOLD;

    dragState.current = null;
    setIsDragging(false);

    if (target.hasPointerCapture(e.pointerId)) {
      target.releasePointerCapture(e.pointerId);
    }

    if (wasClosed) {
      onClose();
      return;
    }

    const midpoint = (SNAP_COLLAPSED + SNAP_EXPANDED) / 2;
    setHeightVh(heightVh > midpoint ? SNAP_EXPANDED : SNAP_COLLAPSED);
  };

  if (!renderedProject || !renderedProject.detail) return null;

  const isBeingDismissed = isDragging && heightVh < SNAP_COLLAPSED;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm ${
          isVisible ? "animate-backdrop-in" : "animate-backdrop-out"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-sheet-title"
        style={{ height: `${heightVh}vh` }}
        className={`fixed bottom-0 left-0 right-0 z-[70] mx-auto flex w-[90%] flex-col overflow-hidden rounded-t-3xl border border-b-0 border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-2xl ${
          isVisible ? "animate-sheet-in" : "animate-sheet-out"
        } ${
          isDragging
            ? "transition-none"
            : "transition-[height,opacity] duration-300 ease-out"
        } ${isBeingDismissed ? "opacity-60" : "opacity-100"}`}
      >
        {/* Drag handle */}
        <div
          className="group relative flex shrink-0 cursor-grab touch-none select-none flex-col items-center justify-center gap-1 pt-3 pb-3 active:cursor-grabbing"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
          aria-label="Drag to resize or dismiss"
          role="button"
          tabIndex={0}
        >
          {/* One-time hint tooltip */}
          <div
            className={`pointer-events-none absolute left-1/2 top-1 -translate-x-1/2 rounded-full bg-[rgb(var(--text))] px-3 py-1 text-[11px] font-medium text-[rgb(var(--bg))] shadow-md transition-opacity duration-500 ${
              showHint ? "opacity-100" : "opacity-0"
            }`}
          >
            Drag to resize
          </div>

          {/* Handle: thin line + chevrons */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="h-px w-8 bg-[rgb(var(--border))] transition-colors group-hover:bg-[rgb(var(--muted-text))]" />
            <div className="flex flex-col items-center text-[rgb(var(--muted-text))] opacity-60 transition-opacity group-hover:opacity-100">
              <ChevronUp size={12} strokeWidth={2.5} />
              <ChevronDown size={12} strokeWidth={2.5} className="-mt-1.5" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-6 pb-4">
          <h2
            id="project-sheet-title"
            className="truncate text-lg font-semibold text-[rgb(var(--text))]"
          >
            {renderedProject.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[rgb(var(--muted-text))] transition-colors hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-10">
          {/* Cover — full width, natural aspect */}
          <div
            className={`relative mb-5 w-full overflow-hidden rounded-2xl bg-linear-to-br ${renderedProject.gradient}`}
          >
            {renderedProject.cover ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={renderedProject.cover}
                  alt={`${renderedProject.title} cover`}
                  className="block h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
              </>
            ) : (
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />
              </div>
            )}
          </div>

          {/* Tagline */}
          <p className="mb-5 text-sm leading-relaxed text-[rgb(var(--text))]">
            {renderedProject.detail.tagline}
          </p>

          {/* CTA buttons */}
          <div className="mb-7 flex flex-wrap items-center gap-2">
            {renderedProject.live && (
              <a
                href={renderedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--text))] px-3.5 py-1.5 text-xs font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80"
              >
                Visit live site
                <ArrowUpRight size={12} />
              </a>
            )}

            {renderedProject.githubOnDetail && (
              <a
                href={renderedProject.githubOnDetail}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--ctrl-border))] bg-transparent px-3.5 py-1.5 text-xs font-medium text-[rgb(var(--text))] transition-opacity hover:opacity-70"
              >
                <Github size={12} />
                View source
              </a>
            )}

            {renderedProject.githubPrivate && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--ctrl-border))] bg-transparent px-3.5 py-1.5 text-xs font-medium text-[rgb(var(--muted-text))] opacity-70">
                <Lock size={12} />
                Private repository
              </span>
            )}
          </div>

          {/* Overview */}
          <section className="mb-7">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
              Overview
            </h3>
            <div className="space-y-2.5 text-sm leading-relaxed text-[rgb(var(--body-text))]">
              {renderedProject.detail.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-7">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
              Key features
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {renderedProject.detail.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-snug text-[rgb(var(--body-text))]"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots — horizontal carousel */}
          {renderedProject.detail.screenshots.length > 0 && (
            <section className="mb-7">
              <div className="mb-3 flex items-baseline justify-between gap-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
                  Screenshots
                </h3>
                <span className="text-[11px] text-[rgb(var(--muted-text))]">
                  Swipe to view all →
                </span>
              </div>
              <ProjectScreenshots
                screenshots={renderedProject.detail.screenshots}
                variant="carousel"
              />
            </section>
          )}

          {/* Tech stack */}
          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {renderedProject.detail.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgb(var(--ctrl-border))] px-2.5 py-0.5 text-[11px] font-medium text-[rgb(var(--muted-text))]"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}