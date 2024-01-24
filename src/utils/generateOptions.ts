import {constants} from './constant';
export const generateOptions=(uri: string) => {
    return {
        hostname: constants.hostname,
        path: uri,
        headers: {
            'User-Agent': constants.user_agent
        },
        OAuth: process.env.GITHUB_ACCESS_TOEKN!
    }
};

export const dataFormatter=(arr: object[]|[]) => {
    const data=arr.reduce((item: any,result: any) => {
        const mapper={
            userProfile: result.login,
            userId: result.id,
            profileImage: result.avatar_url,
            url: result.url,
            repoUrl: result.repos_url
        };
        item.push(mapper);
        return item;
    },[])
    return data;
}