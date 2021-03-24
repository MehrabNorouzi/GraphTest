const testDat = [1,2,3,4,5,6,7,8,9,10,11,12,13,6,8,9,10,11,13]

const revDat = testDat.reverse();

var plotDat = [];

for(var i = 0; i <= 6; i++)
{
  plotDat.push(revDat[i]);
}

const finDat = plotDat.reverse();

export default finDat
