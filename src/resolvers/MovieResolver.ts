import { InputType, Field, Arg, Mutation, Int, Query } from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
    @Field()
    title: string;

    @Field(() => Int)
    minutes: number;
}

// This allows you to omit fields during update.
// If it used the `MovieInput`, all fields would have to be passed in on update.
@InputType()
class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    minutes?: number;
}

export class MovieResolver {
    @Mutation(() => Movie)
    async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
        const movie = await Movie.create(options).save();
        return movie;
    }

    @Mutation(() => Boolean)
    async updateMovie(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => MovieUpdateInput) input: MovieUpdateInput
    ) {
        await Movie.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteMovie(@Arg("id", () => Int) id: number) {
        await Movie.delete({ id });
        return true;
    }

    @Query(() => [Movie])
    movies() {
        return Movie.find();
    }
}
