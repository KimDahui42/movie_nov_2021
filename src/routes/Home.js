import React from "react";
//import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?sort_by=rating`
            )
        ).json();
        this.setState({ movies:json.data.movies, isLoading: false });//{state:���� ���� �Ҵ����� ���� ��ȭ �����Ͱ� �ִ� ����}, ���¸�� �������� �����ϴٸ� ��డ��
    }; 
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
