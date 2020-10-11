import { Arg, Mutation, Int, Query } from "type-graphql";
import { Movie } from "../entity/Movie";

export class MovieResolver {
    @Mutation(() => Boolean)
    async createMovie(
        @Arg("title", () => String) title: string,
        @Arg("minutes", () => Int) minutes: number
    ) {
        console.log("title", title);
        await Movie.insert({ title, minutes });
        return true;
    }

    @Query(() => [Movie])
    movies() {
        return Movie.find();
    }
}
