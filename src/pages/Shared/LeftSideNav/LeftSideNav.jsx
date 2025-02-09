import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <NavLink
                    className="block ml-4 text-xl font-semibold mt-6"
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;