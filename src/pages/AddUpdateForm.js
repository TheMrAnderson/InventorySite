import { React } from "react";
import { useForm } from "react-hook-form";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import '../css/Form.css'

function AddUpdateForm({ itemNumber, items, setItems }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(`AddUpdateForm: Item Number: ${itemNumber}, Items: ${items}`);
  var item;
  if (itemNumber && items !== undefined) {
    item = items.find(i => i.ItemNumber === itemNumber);
    console.log(`Found Item: ${item}`);
  }

  const onSubmit = (data) => {
    console.log(`Errors: ${errors}`);
  };

  const isPiece = item?.InventoryType === 0 ?? true;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="itemNumber">Item Number:</label>
        <input
          id="itemNumber"
          type="text"
          placeholder="Item Number"
          value={item?.ItemNumber}
          disabled
          style={{ color: 'Grey', opacity: '1' }}
          {...register("itemNumber", {})}
        />
      </div>
      <div>
        <label htmlFor="itemDesc">Item Description:</label>
        <input
          id="itemDesc"
          type="text"
          placeholder="Item Description"
          value={item?.Description}
          {...register("itemDesc", {
            required: 'Description is required. Everything is called something',
          })}
        />
        <span className="errorText">{errors?.itemDesc?.message}</span>
      </div>
      <div>
        <label htmlFor="invType">Inventory Type:</label>
        <span >
          <input
            {...register("invType", {
              required: "An inventory type must be selected. It's got to be something"
            })}
            id="radioPiece"
            type="radio"
            value="0"
            name="invType"
            selected={isPiece}
            className="radioOption"
          />
          <span className="radioLabel">Piece</span>
        </span>
        <span>
          <input
            {...register("invType", { required: "An inventory type must be selected. It's got to be something" })}
            id="radioBulk"
            type="radio"
            value="1"
            name="invType"
            selected={!isPiece}
            className="radioOption"
          />
          <span className="radioLabel">Bulk</span>
        </span>
        <span className="errorText">{errors?.invText?.message}</span>
      </div>
      {item?.InventoryType === "0" &&
        <>
          <div>
            <label htmlFor="currQty">Current Qty:</label>
            <input
              type="text"
              placeholder="Current Qty"
              value={item?.CurrentQty}
              {...register("currQty", {
                required: 'Must specify a current qty',
                pattern: {
                  value: /^[+]?\d+([.]\d+)?$/,
                  message: "Can't be less than 0",
                },
                valueAsNumber: true,
              })}
            />
            <span className="errorText">{errors?.currQty?.message}</span>
          </div>
          <div>
            <label htmlFor="minQty">Min Qty:</label>
            <input
              type="text"
              placeholder="Min Qty"
              value={item?.MinQty}
              {...register("minQty", {
                required: 'Must specify a min qty',
                pattern: {
                  value: /^[+]?\d+([.]\d+)?$/,
                  message: "Can't be less than 0",
                },
                valueAsNumber: true,
              })}
            />
            <span className="errorText">{errors?.minQty?.message}</span>
          </div>
        </>
      }
      <div>
        <label htmlFor="sourceUrl">Source URL:</label>
        <input
          type="text"
          placeholder="Source URL"
          pattern="^(http|https)://"
          value={item?.SourceURL}
          {...register("sourceUrl", {})}
        />
        <span className="errorText">{errors?.sourceUrl?.message}</span>
      </div>
      <div>
        <label htmlFor="mfr">Manufacturer:</label>
        <input
          type="text"
          placeholder="Manufacturer"
          value={item?.Manufacturer}
          {...register("mfr", {})}
        />
      </div>
      <div>
        <label htmlFor="partNo">Part Number:</label>
        <input
          type="text"
          placeholder="Part Number"
          value={item?.PartNumber}
          {...register("partNo", {})}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          placeholder="Location"
          value={item?.Location}
          {...register("location", {
            required: "Location is required. We can't have something nowhere",
          })}
        />
        <span className="errorText">{errors?.location?.message}</span>
      </div>
      <div>
        <input type="submit" className="button" value="Save" />
      </div>
    </form>
  );
}

export default function AddUpdate({ items, setItems }) {
  const { itemNumber } = useParams();
  console.log(`AddUpdate: Item Number:${itemNumber}, Items: ${items}, SetItems: ${setItems}`);
  return (
    <>
      {itemNumber === undefined ? (
        <Nav title={"Add Inventory"} />
      ) : (
        <Nav title={"Edit Inventory"} />
      )}
      <AddUpdateForm itemNumber={itemNumber} items={items} setItems={setItems} />
    </>
  );
}
