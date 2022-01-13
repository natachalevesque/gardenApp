import './LastFrostDate.css'

function LastFrostDate() {

    return (
        <div className={"LastFrostDate"}>
            <label htmlFor="lastFrostDate">Last Frost Date&nbsp;</label>
            <input type="date" name="lastFrostDate" id="lastFrostDate"/>
        </div>
    )
}

export default LastFrostDate;