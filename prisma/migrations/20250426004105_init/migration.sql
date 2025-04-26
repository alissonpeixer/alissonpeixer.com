-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormContact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "emailSend" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_FormContact" ("email", "id", "name", "text") SELECT "email", "id", "name", "text" FROM "FormContact";
DROP TABLE "FormContact";
ALTER TABLE "new_FormContact" RENAME TO "FormContact";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
