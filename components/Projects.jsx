import Ninfas from "./projects/Ninfas";
import Notes from "./projects/Notes";
import Todo from "./projects/Todo";

const Projects = () => {
  return (
    <section className="flex flex-col content-center justify-start w-full gap-4">
      <Ninfas />
      <Notes />
      <Todo />
    </section>
  );
};
export default Projects;
