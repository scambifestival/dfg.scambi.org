export default function Button({
    children,
    href = '',
    styleType = 'primary',
    type = 'button',
    classes = '',
}) {

    const buttonStyle = 'btn-' + styleType;

    return (
        <button
            type={type}
            className={`rounded-2xl font-semibold ${classes} ${buttonStyle} regular`}
            onClick={() => (window.location.href = href)}>
            {children}
        </button>
    );
}
