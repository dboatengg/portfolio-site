ALTER TABLE "GuestbookEntry" ADD COLUMN "provider" TEXT;
ALTER TABLE "GuestbookEntry" ADD COLUMN "providerId" TEXT;

UPDATE "GuestbookEntry" SET "provider" = 'github', "providerId" = "githubId";

ALTER TABLE "GuestbookEntry" ALTER COLUMN "provider" SET NOT NULL;
ALTER TABLE "GuestbookEntry" ALTER COLUMN "providerId" SET NOT NULL;
ALTER TABLE "GuestbookEntry" DROP COLUMN "githubId";

CREATE UNIQUE INDEX "GuestbookEntry_provider_providerId_key" ON "GuestbookEntry"("provider", "providerId");