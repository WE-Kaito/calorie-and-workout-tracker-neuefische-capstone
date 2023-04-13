import {
  Wrapper,
  List,
  ListItem,
  ListAddButton,
  AddDishForm,
  Input,
  BackButton,
  Label,
  SubmitButton,
  CloseFormButton,
  ButtonWrapper,
} from "../../components/DishesPage/styles.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

export default function DishesPage() {
  const { dishes, addDish } = useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    const mass = parseInt(data.mass);
    const proteins = parseInt(data.proteins);
    const carbs = parseInt(data.carbs);
    addDish(
      data.meal,
      calories,
      mass ? mass : undefined,
      proteins ? proteins : undefined,
      carbs ? carbs : undefined,
      data.notes ? data.notes : undefined
    );
    toggleFormVisibility(false);
    event.target.reset();
  }

  // hydration error handling
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }
  // --------------------------------

  return (
    <Wrapper>
      <Link href="/">
        <BackButton>🔙</BackButton>
      </Link>
      <List invisible={formVisibility}>
        {dishes.slice().map((dish, index) => (
          <ListItem
            href={`/dishes/${index}`}
            key={index}
          >{`${dish.meal} --- ${dish.calories}kcal`}</ListItem>
        ))}
        <ListAddButton
          onClick={() => {
            toggleFormVisibility(!formVisibility);
          }}
        >
          add Item
        </ListAddButton>
      </List>
      <AddDishForm
        visible={formVisibility}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Label for="meal">Your Meal:</Label>
        <Input id="meal" name="meal" type="text" required></Input>

        <Label for="calories">{`Calories (kcal):`}</Label>
        <Input id="calories" name="calories" type="number" required></Input>

        <Label for="mass">{`Mass (g):`}</Label>
        <Input id="mass" name="mass" type="number"></Input>

        <Label for="proteins">{`Proteins (g):`}</Label>
        <Input if="proteins" name="proteins" type="number"></Input>

        <Label for="carbs">{`Carbs (g):`}</Label>
        <Input id="carbs" name="carbs" type="number"></Input>

        <Label for="notes">Notes:</Label>
        <Input
          id="notes"
          name="notes"
          type="text"
          style={{ textAlign: "center" }}
        ></Input>
        <ButtonWrapper>
          <CloseFormButton
            type="button"
            onClick={() => {
              toggleFormVisibility(false);
            }}
          >
            close
          </CloseFormButton>
          <SubmitButton>submit</SubmitButton>
        </ButtonWrapper>
      </AddDishForm>
    </Wrapper>
  );
}
