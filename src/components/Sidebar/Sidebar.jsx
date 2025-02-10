import { useState, useContext } from 'react';
import './Sidebar.css';
import { data, Subscribe } from '../../Constants/Constant';
import { VideoContext } from '../../Context/VideoContext'; 
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ visible }) => {
  const [active, setActive] = useState(null);
  const { setCategory } = useContext(VideoContext); 
  const navigate = useNavigate();
  return (
    <aside className={visible ? "showSidebar" : "aside"}>
      <ul>
        {data.map((d, index) => (
          <li
            key={index}
            onClick={() => {
              setActive(index);
              setCategory(d.category);
              navigate("/")
            }}
            className={active === index ? "active" : ""}
          >
            {d.icon}
            <span>{d.span}</span>
          </li>
        ))}
      </ul>

      {/* SUBSCRIBE */}
      <ul className='Sub'>
        <h3>Subscribed</h3>
        {Subscribe.map((s, index) => (
          <li key={index}>
            <img src={s.img} alt={`Profile picture of ${s.p}`}
            onError={(e) => e.target.style.display = 'none'} 
            loading='lazy' />
            <p>{s.p}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
