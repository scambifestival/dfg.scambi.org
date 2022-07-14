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
            class={`rounded-2xl font-semibold ${classes} ${buttonStyle} regular`}
            onClick={() => (window.location.href = href)}>
            {children}
        </button>
    );
}
