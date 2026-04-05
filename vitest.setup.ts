vi.mock("bcryptjs", () => ({
    genSalt: vi.fn(),
    hash: vi.fn(),
}));
