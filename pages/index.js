import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} >  </TimeLine>
            </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
        .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
            img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}
function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })
            }
        </StyledTimeline>
    )
}

