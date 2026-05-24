-- CreateTable
CREATE TABLE "GuestbookEntry" (
    "id" TEXT NOT NULL,
    "githubId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "image" TEXT,
    "message" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestbookEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuestbookEntry_githubId_key" ON "GuestbookEntry"("githubId");
