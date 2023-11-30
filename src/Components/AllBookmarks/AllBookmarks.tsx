import { useSelector } from "react-redux"
import SingleBookmark from "../SingleBookmark/SingleBookmark"
import './AllBookmarks.scss';
import { IState } from "../../store";



function AllBookmarks() {
    const savedBoomarks = useSelector((state: IState) => state.bookmark.bookmarks);
    return (
        <div className="bookmarks-container">
            {
                savedBoomarks.length === 0 ?
                    <div className="no-bookmark-message">Please add bookmarks to see live data</div> :
                    <>
                        {
                            savedBoomarks.map((coin) => <SingleBookmark key={coin} coinName={coin} />)
                        }
                    </>
            }
        </div>
    )
}
export default AllBookmarks;