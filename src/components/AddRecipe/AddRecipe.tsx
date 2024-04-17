import { useFieldArray, useForm } from "react-hook-form";
import "./AddRecipe.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  title: string;
  image: string;
  description: string;
  myRecipe: string;
}

const AddRecipe = () => {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    image: yup.string().required("Upload recipe image "),
    description: yup.string().required("Description is required"),
    myRecipe: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "steps",
  });

  const {
    fields: protipsFields,
    append: protipsAppend,
    remove: proTipsRemove,
  } = useFieldArray({
    control: control,
    name: "protips",
  });

  const {
    fields: ingredientsFields,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({
    control: control,
    name: "ingredients",
  });

  const {
    fields: instructionsFields,
    append: instructionsAppend,
    remove: instructionsRemove,
  } = useFieldArray({
    control: control,
    name: "instructions",
  });

  const submit = (data: FormData) => {
    localStorage.setItem("recipe", JSON.stringify(data));
  };
  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-box">
          <label>Add Recipe Title</label>
          <input type="text" {...register("title")} />
          {errors?.title && <p>{errors?.title?.message}</p>}
        </div>
        <div className="input-box">
          <label>Upload Recipe Image </label>
          <input
            type="file"
            {...register("image")}
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setValue("image", reader.result as any);
              };
              reader.readAsDataURL(file);
            }}
          />
          {errors?.image && <p>{errors?.image?.message}</p>}
        </div>
        <div className="input-box">
          <label>Add Recipe Description </label>
          <input type="text" {...register("description")} />
          {errors?.description && <p>{errors?.description?.message}</p>}
        </div>
        <div className="input-box">
          <label>Add My Recipe Description </label>
          <input type="text" {...register("myRecipe")} />
        </div>
        <div className="input-box">
          <label>Steps to Make</label>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`steps.${index}.description` as any)}
              />
              <button type="button" onClick={() => remove(index)}>
                Remove Step
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ id: fields.length + 1, description: "" })}
          >
            Add Step
          </button>
        </div>
        <div className="input-box">
          <label>Pro Tips</label>
          {protipsFields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`protips.${index}.description` as any)}
              />
              <button type="button" onClick={() => proTipsRemove(index)}>
                Remove Pro Tip
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              protipsAppend({ id: protipsFields.length + 1, description: "" })
            }
          >
            Add Pro Tip
          </button>
        </div>

        <div className="input-box">
          <label>Ingredients</label>
          {ingredientsFields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`ingredients.${index}.description` as any)}
              />
              <button type="button" onClick={() => ingredientsRemove(index)}>
                Remove Ingredient
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              ingredientsAppend({
                id: ingredientsFields.length + 1,
                description: "",
              })
            }
          >
            Add Ingredient
          </button>
        </div>

        <div className="input-box">
          <label>Instructions</label>
          {instructionsFields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`instructions.${index}.description` as any)}
              />
              <button type="button" onClick={() => instructionsRemove(index)}>
                Remove Instruction
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              instructionsAppend({
                id: instructionsFields.length + 1,
                description: "",
              })
            }
          >
            Add Instruction
          </button>
        </div>
        <input type="submit" value="Add Recipe" />
      </form>
    </div>
  );
};

export default AddRecipe;
