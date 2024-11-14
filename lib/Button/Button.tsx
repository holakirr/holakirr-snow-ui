type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => (
	<button {...props}>{children}</button>
);

Button.displayName = "Button";
export { Button };
