export default function PlaceholderBanner({ items = [] }) {
  if (process.env.NODE_ENV !== "development" || items.length === 0) return null;

  return (
    <aside className="border-b border-cherry/20 bg-cherry/10 px-4 py-3 text-sm text-cherry" role="status">
      <div className="mx-auto max-w-7xl">
        <strong>Before launch:</strong> confirm {items.join(", ")}.
      </div>
    </aside>
  );
}
