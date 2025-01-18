import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);
describe("Card component", () => {
    it("renders children correctly", () => {
        const { getByText } = render(<Card>Test Content</Card>);
        expect(getByText("Test Content")).toBeInTheDocument();
    });

    it("applies primary color class", () => {
        const { getByTestId } = render(<Card color="primary">Test Content</Card>);
        const container = getByTestId("cardContainer");
        expect(container).toHaveStyle(`
            background-color:#9879e9;
        `);
    });

    it("applies secondary color class", () => {
        const { getByTestId } = render(<Card color="secondary">Test Content</Card>);
        const container = getByTestId("cardContainer");
        expect(container).toHaveStyle(`
           background-color:#eb2d52;
        `);
    });

    it("applies small size class", () => {
        const { getByTestId } = render(<Card size="sm">Test Content</Card>);
        const container = getByTestId("cardContainer");

        expect(container).toHaveStyle(`
            min-height:50px;
        `);
    });

    it("applies large size class", () => {
        const { getByTestId } = render(<Card size="lg">Test Content</Card>);
        const container = getByTestId("cardContainer");
        expect(container).toHaveStyle(`
            min-height: 100px;
        `);
    });
});

// We recommend installing an extension to run jest tests.
