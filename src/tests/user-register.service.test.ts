import { UserAlreadyExistsError } from "@/errors/user-already-exists.error.ts";
import { PrismaUserRepositoryMock } from "@/mocks/user-repository.mock.ts";
import { UserRegisterService } from "@/services/user-register.service.ts";
import { genSalt, hash } from "bcryptjs";
import { describe, expect, test, vi } from "vitest";

describe("Register User Service", () => {
    let sut: UserRegisterService;
    beforeEach(() => {
        vi.clearAllMocks();
        sut = new UserRegisterService(PrismaUserRepositoryMock);
    });
    describe("Happy Path", () => {
        test("should register user successfully", async () => {
            vi.mocked(PrismaUserRepositoryMock.create).mockResolvedValueOnce({
                id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
                password_hash: "hashedPassword",
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            vi.mocked(PrismaUserRepositoryMock.findByEmail).mockResolvedValueOnce(null);
            vi.mocked(genSalt).mockImplementation(async () => "salt");
            vi.mocked(hash).mockImplementation(async () => "hashedPassword");

            const result = await sut.handle({
                name: "John Doe",
                email: "john.doe@example.com",
                password: "password",
            });
            expect(result).toStrictEqual({
                id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
                password_hash: "hashedPassword",
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date),
            });
            expect(genSalt).toHaveBeenCalledWith(6);
            expect(hash).toHaveBeenCalledWith("password", "salt");
            expect(PrismaUserRepositoryMock.create).toHaveBeenCalledWith({
                name: "John Doe",
                email: "john.doe@example.com",
                password_hash: "hashedPassword",
            });
        });
    });
    describe("Edge Cases", () => {
        test("should handle salt generation error", async () => {
            vi.mocked(genSalt).mockImplementation(async () => {
                throw new Error("Salt generation failed");
            });

            expect(async () => {
                await sut.handle({
                    name: "John Doe",
                    email: "john.doe@example.com",
                    password: "password",
                });
            }).rejects.toThrow("Salt generation failed");
            expect(PrismaUserRepositoryMock.create).not.toHaveBeenCalled();
        });
        test("should handle hash generation error", async () => {
            vi.mocked(genSalt).mockImplementation(async () => "salt");
            vi.mocked(hash).mockImplementation(async () => {
                throw new Error("Hash generation failed");
            });
            expect(async () => {
                await sut.handle({
                    name: "John Doe",
                    email: "john.doe@example.com",
                    password: "password",
                });
            }).rejects.toThrow("Hash generation failed");
            expect(PrismaUserRepositoryMock.create).not.toHaveBeenCalled();
        });
    });
    describe("Invalid Cases", () => {
        test("should throw error when email already exists", async () => {
            vi.mocked(PrismaUserRepositoryMock.findByEmail).mockResolvedValueOnce({
                id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
                password_hash: "password",
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            expect(async () => {
                await sut.handle({
                    name: "John Doe",
                    email: "john.doe@example.com",
                    password: "password",
                });
            }).rejects.toBeInstanceOf(UserAlreadyExistsError);
        });
    });
});
