import React,{useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { BeerContext } from '../../contexts/BeerContextsProvider';

export default function Paginate() {
    const { pageCount,setCurrentPage, } = useContext(BeerContext);

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let newCount = (data.selected +1);
        setCurrentPage(newCount);

    };
    
    return (
        <div>
 <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
        </div>
       
    )
}
