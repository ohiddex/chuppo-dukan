export default function Newsletter() {
  return (
    <section className="bg-base-200 container mx-auto rounded-xl py-10 px-4 flex flex-col justify-center items-center text-center gap-4 md:gap-6">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
        Latest Discount News!
      </h2>
      <p className="leading-relaxed opacity-80 max-w-[65ch]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
        doloribus, neque odio ullam fugiat qui officiis placeat dolore
        distinctio quas. Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex gap-2 items-center pt-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered w-full md:w-[20rem]"
        />
        <button className="btn btn-neutral px-8">Submit</button>
      </div>
    </section>
  );
}
