import { React, useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import '../css/Form.css'
import { INV_TYPE_OPTIONS } from "../App";


const InvTypeMenuOptions = () => {
  return (
    <>
      <option value="">Select inventory type</option>
      {INV_TYPE_OPTIONS.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </>
  )
}

const AddUpdateForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let item;
  if (props.itemNumber && props.items !== undefined) {
    item = props.items.find(i => i.ItemNumber === props.itemNumber);
  }

  const [invType, setInvType] = useState(item?.InventoryType);

  const onSubmit = (data) => {
    console.log(`Errors: ${errors}`);
    console.log(data);
  };

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
        <label htmlFor="invTypeSelect">Inventory Type:</label>
        <div className="reactSelect">
          <select
            value={invType}
            onChange={e => {
              setInvType(e.target.value)
            }
            }>
            <InvTypeMenuOptions />
          </select>
        </div>
        <span className="errorText">{errors?.invText?.message}</span>
      </div>
      {invType !== 1 &&
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
  return (
    <>
      {itemNumber === undefined ? (
        <Nav title="Add Inventory" />
      ) : (
        <Nav title="Edit Inventory" />
      )}
      <AddUpdateForm itemNumber={itemNumber} items={items} setItems={setItems} />
    </>
  );
}
