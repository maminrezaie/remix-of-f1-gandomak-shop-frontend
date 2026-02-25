const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-1">{children}</main>
  </div>
);

export default Layout;
