export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col items-center">
        <div className="relative w-full max-w-4xl">

          {/* รูปบน */}
          <div>
            <img
              src="https://placehold.co/800x300"
              alt=""
              className="w-full rounded-3xl mb-5"
            />
            <div>
              <h1>Summer Arrival of Outfit</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero!</p>
            </div>
            <button></button>
          </div>

          <div>
            <div className="flex gap-5">
              <img
                src="https://placehold.co/350x300"
                alt=""
                className="w-1/2 rounded-3xl"
              />
              <img
                src="https://placehold.co/350x300"
                alt=""
                className="w-1/2 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


