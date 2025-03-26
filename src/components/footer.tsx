"use client";

import { FC } from "react";
import { Formik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copyright, FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export const Footer: FC = () => {
	return (
		<div
			className={"border-t-4 border-solid border-primary bg-white flex flex-col justify-center items-center gap-2 text-white-content p-2"}>
			<h2 className={"text-2xl font-bold"}> Are We Missing Words?</h2>
			<Formik
				initialValues={{
					name: "",
					email: "",
					proposedWord: "",
					wordMeaning: ""
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ handleSubmit, handleChange, values }) => (
					<form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
						<div className={"flex gap-2"}>
							<Input
								type="text"
								name="name"
								placeholder="Name"
								value={values.name}
								onChange={handleChange}
								className="rounded-lg h-8"
							/>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								value={values.email}
								onChange={handleChange}
								className="rounded-lg h-8"
							/>
						</div>
						<div className={"flex gap-2"}>
							<Input
								type="text"
								name="proposedWord"
								placeholder="Proposed Word"
								value={values.proposedWord}
								onChange={handleChange}
								className="rounded-lg h-8"
							/>
							<Input
								type="text"
								name="wordMeaning"
								placeholder="Word Meaning"
								value={values.wordMeaning}
								onChange={handleChange}
								className="rounded-lg h-8"
							/>
						</div>
						<Button type="submit"
								className="rounded-lg h-8 bg-primary text-primary-content px-4 w-full font-bold">
							Send Word
						</Button>
					</form>
				)}
			</Formik>
			<div className={"flex gap-2"}>
				<Button onClick={() => {
					window.open("https://www.linkedin.com/in/doruk-ekingen-5458a6276", "_blank");
				}}>
					<LinkedinLogo size={42} />
				</Button>
				<Button onClick={() => {
					window.open("https://www.instagram.com/cylingodictionary", "_blank");
				}}>
					<InstagramLogo size={42} />
				</Button>
				<Button onClick={() => {
					window.open("https://www.facebook.com/profile.php?id=61571935274870", "_blank");
				}}>
					<FacebookLogo size={42} />
				</Button>
			</div>
			<p className={"flex justify-center items-center gap-1"}><Copyright className={"inline-flex"} size={24} />2025
				Cylingo</p>
		</div>
	);
};