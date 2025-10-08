interface HeaderProps {
  gameCount: number;
}

export const Header = ({ gameCount }: HeaderProps) => {
  return (
    <>
      <h1 className="mb-4 triforce-accent">Welcome to Zelda Walkthroughs</h1>
      <p className="lead mb-4">
        Your ultimate guide to navigating the legendary adventures of Hyrule.
        Browse through {gameCount} amazing Zelda games!
      </p>
    </>
  );
};
