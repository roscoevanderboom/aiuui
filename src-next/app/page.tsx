
export default function Index() {
  console.log(process.env.NEXT_PUBLIC_SOME_KEY);
  return (
    <div className="home-wrapper ">
      <div className="home-container">
        <h1>Welcome</h1>
      </div>
    </div>
  );
}
