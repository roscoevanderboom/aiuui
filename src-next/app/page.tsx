
export default function Index() {
  console.log(process.env.NEXT_PUBLIC_SOME_KEY);
  return (
    <div className="home-wrapper ">
      <div className="home-container">
        <h1 className="bg-red-700">Welcome</h1>
      </div>
    </div>
  );
}
