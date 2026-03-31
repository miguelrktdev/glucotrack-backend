-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "profile_pic" TEXT,
    "profile_pic_id" TEXT,
    "email_verified_at" TIMESTAMP(3),
    "account_deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blood_glucoses" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "observation" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "blood_glucoses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insulin_doses" (
    "id" TEXT NOT NULL,
    "carbs" INTEGER NOT NULL,
    "current_blood_glucose" INTEGER NOT NULL,
    "target_blood_glucose" INTEGER NOT NULL,
    "sensitivity_factor" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "insulin_doses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_parameters" (
    "id" TEXT NOT NULL,
    "carbs_insulin_factor" INTEGER NOT NULL,
    "sensitivity_factor" INTEGER NOT NULL,
    "target_blood_glucose" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "personal_parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meals" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "carbs" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "personal_parameters_user_id_key" ON "personal_parameters"("user_id");

-- AddForeignKey
ALTER TABLE "blood_glucoses" ADD CONSTRAINT "blood_glucoses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insulin_doses" ADD CONSTRAINT "insulin_doses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_parameters" ADD CONSTRAINT "personal_parameters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
