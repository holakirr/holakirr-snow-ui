import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, ...props }: ButtonProps): ReactNode => (
	<button className="bg-red-700" {...props}>
		{children}
	</button>
);

Button.displayName = "Button";
export { Button };
