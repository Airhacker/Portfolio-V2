import Ninfas from "./projects/Ninfas";
import Notes from "./projects/Notes";
import Todo from "./projects/Todo";

const Projects = () => {
  return (
    <section className="flex flex-col content-center justify-start w-11/12 gap-4 py-8 m-auto xl:w-10/12">
      <Ninfas />
      <Notes />
      <Todo />
    </section>
  );
};
export default Projects;
