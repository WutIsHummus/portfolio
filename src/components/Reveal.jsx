/**
 * Optional wrapper. App.jsx already runs an IntersectionObserver against any
 * element with the `.reveal` class. Adding this class directly is preferred,
 * but this component is here when you want a self-contained boundary.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
