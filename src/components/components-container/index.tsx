export const ComponentsContainer = ({ children }: React.PropsWithChildren) => (
  <section className="flex min-h-screen w-full items-center justify-center">
    <main className="size-full max-w-(--breakpoint-2xl)">{children}</main>
  </section>
);
