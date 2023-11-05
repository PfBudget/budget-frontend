import {useSelector} from "react-redux";


function TestPage() {
    const {jwtToken} = useSelector(state => state.keys);
    let options;
    if(jwtToken) {
        options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
            }
        }
    } else {
        options = {
            method: "GET",
        }
    }

    // const handleUserTestClick = async () => {
    //     const results = await fetch("http://localhost:8080/test/get-user", options);
    //     const data = await results.text();
    //     console.log(data);
    // };
    //
    // const handleAccessTokenClick = async () => {
    //     const results = await fetch("http://localhost:8080/user/status", options);
    //     const data = await results.json();
    //     console.log(data);
    // };
    //
    // const handleTestBalanceGetClick = async () => {
    //     const results = await fetch("http://localhost:8080/api/balance", options);
    //     const data = await results.json();
    //     console.log(data);
    // };
    //
    // const handleTestGetBucketsByCategoryIdClick = async () => {
    //     const results = await fetch("http://localhost:8080/api/buckets/3", options);
    //     const data = await results.json();
    //     console.log(data);
    // };
    //
    // const handleTestGetBucketByIdClick = async () => {
    //     const results = await fetch("http://localhost:8080/api/bucket/1", options);
    //     const data = await results.json();
    //     console.log(data);
    // };
    //
    // const handleTestGetExpensesClick = async () => {
    //     const results = await fetch("http://localhost:8080/api/transactions/1/7", options);
    //     const data = await results.json();
    //     console.log(data);
    // };
    //
    // const handleTestGetNewPlaidLink = async () => {
    //     const results = await fetch("http://localhost:8080/test/new-plaid-link", options);
    //     const data = await results.json();
    //     console.log(data);
    // };

    return(
        <div>
            <h1>Test Page</h1>
            <br />
            {/*<button onClick={handleUserTestClick}>Test User Exists</button>*/}
            {/*<button onClick={handleAccessTokenClick}>Test Access Button Exists</button>*/}
            {/*<button onClick={handleTestBalanceGetClick}>Test Get Balance</button>*/}
            {/*<button onClick={handleTestGetBucketsByCategoryIdClick}>Test Get Buckets By Category Id 3</button>*/}
            {/*<button onClick={handleTestGetBucketByIdClick}>Test Get Buckets By Id 1</button>*/}
            {/*<button onClick={handleTestGetExpensesClick}>Test Get Transactions By Account Id 1</button>*/}
            {/*<button onClick={handleTestGetNewPlaidLink}>Test New Plaid Link</button>*/}
        </div>
    );
}

export default TestPage;