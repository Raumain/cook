export default function Recipes() {
  return (
    <section className="w-full flex flex-col gap-5 p-5 mt-10">
      <div className="grid grid-cols-3 w-full items-center gap-10 mx-auto">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
}

function RecipeCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-110 transition border border-secondary">
      <figure className="w-full h-44 bg-[url(https://loremflickr.com/100/100)] bg-cover bg-center bg-no-repeat"></figure>
      <div className="card-body">
        <h2 className="card-title">
          Cake !
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}
