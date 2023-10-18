import ModuleList from "../Modules/ModuleList";
import Status from "./status";
import "./index.css";

function Home() {
  return (
      <div class="myRow">
        <div class="Content">
          <ModuleList />
        </div>
        <div class="col">
          <div class="d-none d-lg-block">
            <Status />
          </div>
        </div>
      </div>
  );
}
export default Home;
