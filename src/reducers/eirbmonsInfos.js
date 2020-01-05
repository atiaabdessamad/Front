import { LOAD_EIRBMON_SUCCESS } from '../constants/action-types';

export default function eirbmonsInfos(state, action) {

    switch (action.type) {

        case LOAD_EIRBMON_SUCCESS: {
            let payload = action.payload;
            return Object.assign({}, state, {
                eirbmons: payload,
            });
        }

        // case LOAD_EIRBMON_SUCCESS: {
        //     return state || {
        //         eirbmons: [
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
        //             {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}}
        //         ],
        //     }
        // }

        default: {
            // send back default datas for state
            return state || {
                eirbmons: [
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}},
                    {"_id":{"$oid":"5e08e949b9998c72a641e036"},"idInBlockchain":{"$numberInt":"6"},"__v":{"$numberInt":"0"},"canBeExhangedTo":{"$numberInt":"0"},"canBeSelled":false,"created_date":{"$date":{"$numberLong":"1577642163000"}},"field":"Elec","hp":{"$numberInt":"56"},"name":"Salameche","owner_id":"0xca75864fc65c71a7ba0c2e277612427a25495ae1","price":{"$numberInt":"0"},"skills_id":[{"$numberInt":"7"},{"$numberInt":"7"},{"$numberInt":"3"}],"type":"Salameche","value":{"$numberInt":"50"}}
                ],
            }
        }
    }

}