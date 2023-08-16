import ProCard from "./ProCard";
import musicsite from "../assets/proimgs/musicsite.PNG";
import shopping from "../assets/proimgs/shopping.PNG";
import tscrudprac from "../assets/proimgs/tscrudprac.PNG";
import tstodolist from "../assets/proimgs/tstodolist.PNG";
import reduxprac from "../assets/proimgs/reduxprac.PNG";
import tsreduxnote from "../assets/proimgs/tsreduxnote.PNG";
import formani from "../assets/proimgs/formani.PNG";
import password from "../assets/proimgs/password.PNG";
import pomodoro from "../assets/proimgs/pomodoro.PNG";
import bmi from "../assets/proimgs/bmi.PNG";
import tictactoe from "../assets/proimgs/tictactoe.PNG";
import calcul from "../assets/proimgs/calcul.PNG";
import snakegame from "../assets/proimgs/snakegame.PNG";
import clock from "../assets/proimgs/clock.PNG";
import tesla from "../assets/proimgs/tesla.PNG";

export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects & Practice</h1>
      <div className="projectsCon">
        <ProCard
          name="Music Site"
          url="https://music-site-alpha.vercel.app/"
          img={musicsite}
        />
        <ProCard
          name="Shopping Site"
          url="https://codesandbox.io/s/ts-shopping-forked-5nncu9"
          img={shopping}
        />
        <ProCard
          name="TS CRUD Practice"
          url="https://codesandbox.io/s/crud-ts-prac-forked-l56ltt"
          img={tscrudprac}
        />
        <ProCard
          name="TS TodoList"
          url="https://codesandbox.io/s/ts-todo-p-forked-84pbuc"
          img={tstodolist}
        />
        <ProCard
          name="Redux Practice"
          url="https://codesandbox.io/s/reduxcrud-forked-6rq0qv"
          img={reduxprac}
        />
        <ProCard
          name="TS Redux Note"
          url="https://codesandbox.io/s/reduxtsprac-forked-vsm2xk"
          img={tsreduxnote}
        />
        <ProCard
          name="Form Animation"
          url="https://codepen.io/leaderbone/pen/qBYQmRN"
          img={formani}
        />
        <ProCard
          name="Password Generator"
          url="https://codepen.io/leaderbone/pen/NWMaQqp"
          img={password}
        />
        <ProCard
          name="Pomodoro"
          url="https://codepen.io/leaderbone/pen/OJZLaVQ"
          img={pomodoro}
        />
        <ProCard
          name="BMI Calculator"
          url="https://codepen.io/leaderbone/pen/wvmLGON"
          img={bmi}
        />
        <ProCard
          name="Tic Tac Toe"
          url="https://codepen.io/leaderbone/pen/XWExQVe"
          img={tictactoe}
        />
        <ProCard
          name="Calculator"
          url="https://codepen.io/leaderbone/pen/ZExMmpY"
          img={calcul}
        />
        <ProCard
          name="Snake Game"
          url="https://codepen.io/leaderbone/pen/eYVogjd"
          img={snakegame}
        />
        <ProCard
          name="Clock"
          url="https://codepen.io/leaderbone/pen/GRQYKGK"
          img={clock}
        />
        <ProCard
          name="Tesla"
          url="https://codepen.io/leaderbone/pen/dydOJMB"
          img={tesla}
        />
      </div>
    </div>
  );
}
