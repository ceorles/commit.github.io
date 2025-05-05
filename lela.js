import jsonfile from "jsonfile";
import simpleGit from "simple-git";
import moment from "moment";

const path = "./data.json";
const git = simpleGit();

const day = "Sun May 4 12:00:00 2025 +0800";

const contributer = async (MAR) => {
    const data = {
        count: MAR,
        date: day
    };

    await jsonfile.writeFile(path, data);
    await git.add([path]);
    await git.commit(`Commit #${MAR}`, { "--date": day });
};

const commitInfinityAndBeyond = async (n) => {
    for (let MAR = 1; MAR <= n; MAR++) {
        await contributer(MAR);
        if (MAR % 100 === 0) console.log(`${MAR} commits done...`);
    }

    await git.push("origin", "main");
};

commitInfinityAndBeyond(200);