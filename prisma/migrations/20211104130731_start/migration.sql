-- CreateTable
CREATE TABLE "laboratory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "laboratory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_examsTolaboratory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_examsTolaboratory_AB_unique" ON "_examsTolaboratory"("A", "B");

-- CreateIndex
CREATE INDEX "_examsTolaboratory_B_index" ON "_examsTolaboratory"("B");

-- AddForeignKey
ALTER TABLE "_examsTolaboratory" ADD FOREIGN KEY ("A") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_examsTolaboratory" ADD FOREIGN KEY ("B") REFERENCES "laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
