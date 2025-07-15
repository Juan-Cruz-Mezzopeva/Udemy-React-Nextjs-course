export default function Input(
    { type = "text", placeholder = "ingrese su texto", richText = false, ...props } = {}
) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
    return richText ? (
        <textarea placeholder={placeholder} {...props}></textarea>
    ) : (
        <input type={type} placeholder={placeholder} {...props} />
    );
}
