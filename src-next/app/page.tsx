
export default function Index() {
  console.log(process.env.NEXT_PUBLIC_SOME_KEY);
  return (
    <div className="h-full w-full">
      <h1>Welcome</h1>
    </div>
  );
}
