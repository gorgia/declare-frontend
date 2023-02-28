export default function bidComparator(bidA: String, bidB: String) {
    if(!bidB) return 1
    if(bidB === bidA) return 0
    const level_bidA = bidA[0]
    const level_bidB = bidB[0]
    if (level_bidA !== level_bidB)
        return level_bidA - level_bidB
    else {
        if (bidB.length !== bidA.length) return  bidA.length - bidB.length //NT over suit
        else { //level are the same and none is NT
            return bidA.charCodeAt(1) - bidB.charCodeAt(1) //alphabetical order is right!
        }
    }
}