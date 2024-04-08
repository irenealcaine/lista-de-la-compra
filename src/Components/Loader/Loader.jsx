import "./Loader.scss";

const Loader = ({ color }) => {
  return <div className="loader-container"> <span className={`loader ${color}`}></span> </div>
};

export default Loader;
