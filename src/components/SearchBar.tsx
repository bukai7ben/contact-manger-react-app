import React, {FC} from "react";

interface Props {
    setSearchValue: (str: string) => void;
}

const SearchBar: FC<Props> = ({setSearchValue}) => {

    const handledChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    }
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search a contact" onChange={handledChange}/>
        </div>)
}

export default SearchBar