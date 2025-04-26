-- CreateTable
CREATE TABLE "Figma" (
    "id" TEXT NOT NULL,
    "hostEmail" TEXT NOT NULL,
    "whitelist" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Figma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rectangle" (
    "id" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "stroke" TEXT,
    "strokeWidth" INTEGER,
    "cornerRadius" INTEGER,
    "figmaId" TEXT NOT NULL,

    CONSTRAINT "Rectangle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circle" (
    "id" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "stroke" TEXT,
    "strokeWidth" INTEGER,
    "figmaId" TEXT NOT NULL,

    CONSTRAINT "Circle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "fontSize" INTEGER NOT NULL,
    "fontFamily" TEXT,
    "figmaId" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rectangle" ADD CONSTRAINT "Rectangle_figmaId_fkey" FOREIGN KEY ("figmaId") REFERENCES "Figma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_figmaId_fkey" FOREIGN KEY ("figmaId") REFERENCES "Figma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_figmaId_fkey" FOREIGN KEY ("figmaId") REFERENCES "Figma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
