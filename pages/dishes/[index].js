import {
  Wrapper,
  List,
  AddDishForm,
  Input,
  BackButton,
  Label,
  SubmitButton,
  CloseFormButton,
  ButtonWrapper,
  DetailsList,
  Detail,
  DishHeadline,
  DetailsBackButton,
  DeleteButton,
  DetailsEditButton,
} from "../../components/DishesPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DishDetails() {
  const { dishes, addDish, deleteDish } = useCalorieStore();

  const router = useRouter();
  const { index = 0 } = router.query;

  const [formVisibility, toggleFormVisibility] = useState(false);

  const [inputMeal, setInputMeal] = useState(dishes[0]?.meal || "");
  const [inputCal, setInputCal] = useState(dishes[0]?.calories || 0);
  const [inputMass, setInputMass] = useState(dishes[0]?.mass || 0);
  const [inputProteins, setInputProteins] = useState(dishes[0]?.proteins || 0);
  const [inputCarbs, setInputCarbs] = useState(dishes[0]?.carbs || 0);
  const [inputNotes, setInputNotes] = useState(dishes[0]?.notes || "");

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
    deleteDish(dishes[index]);
    toggleFormVisibility(false);
    event.target.reset();
  }

  if (dishes[0])
    return (
      <Wrapper>
        <DeleteButton
          onClick={() => {
            deleteDish(dishes[index]);
            router.push("/dishes");
          }}
        >
          DELETE ENTRY
        </DeleteButton>
        <Link href="/">
          <BackButton>🔙</BackButton>
        </Link>
        <List invisible={formVisibility}>
          <DetailsList>
            <Detail>
              <DishHeadline>{dishes[index].meal}</DishHeadline>
              {` (${dishes[index].mass} g)`}
            </Detail>
            <Detail>{`Calories: ${dishes[index].calories} kcal`}</Detail>
            <Detail>{`Proteins: ${dishes[index].proteins} g`}</Detail>
            <Detail>{`Carbs: ${dishes[index].carbs} g`}</Detail>
            <Detail>{dishes[index].notes}</Detail>
          </DetailsList>

          <DetailsBackButton href="/dishes">←</DetailsBackButton>
          <DetailsEditButton
            onClick={() => {
              toggleFormVisibility(!formVisibility);
            }}
          >
            EDIT
          </DetailsEditButton>
        </List>

        <AddDishForm
          visible={formVisibility}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Label htmlFor="meal">Your Meal:</Label>
          <Input
            id="meal"
            name="meal"
            type="text"
            required
            value={inputMeal}
            maxLength={20}
            onChange={(event) => setInputMeal(event.target.value)}
          ></Input>

          <Label htmlFor="calories">{`Calories (kcal):`}</Label>
          <Input
            min={0}
            max={7000}
            id="calories"
            name="calories"
            type="number"
            required
            value={inputCal}
            onChange={(event) => setInputCal(event.target.value)}
          ></Input>

          <Label htmlFor="mass">{`Mass (g):`}</Label>
          <Input
            id="mass"
            name="mass"
            type="number"
            value={inputMass}
            min={0}
            max={7000}
            onChange={(event) => setInputMass(event.target.value)}
          ></Input>

          <Label htmlFor="proteins">{`Proteins (g):`}</Label>
          <Input
            id="proteins"
            name="proteins"
            type="number"
            value={inputProteins}
            max={7000}
            onChange={(event) => setInputProteins(event.target.value)}
          ></Input>

          <Label htmlFor="carbs">{`Carbs (g):`}</Label>
          <Input
            id="carbs"
            name="carbs"
            type="number"
            value={inputCarbs}
            min={0}
            max={7000}
            onChange={(event) => setInputCarbs(event.target.value)}
          ></Input>

          <Label htmlFor="notes">Notes:</Label>
          <Input
            id="notes"
            name="notes"
            type="text"
            value={inputNotes}
            maxLength={140}
            style={{ textAlign: "center" }}
            onChange={(event) => setInputNotes(event.target.value)}
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
            <SubmitButton>save</SubmitButton>
          </ButtonWrapper>
        </AddDishForm>
      </Wrapper>
    );
}
