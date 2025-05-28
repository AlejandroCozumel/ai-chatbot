'use client'
import Section from '@/components/section-label'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { useFilterQuestions, useHelpDesk } from '@/hooks/settings/use-settings'
import React from 'react'
import FormGenerator from '../form-generator'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'

type Props = {
  id: string
}

const FilterQuestions = ({ id }: Props) => {
  const { register, errors, onAddFilterQuestions, isQuestions, loading } =
    useFilterQuestions(id)

  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2 bg-card text-card-foreground border-border">
      <CardContent className="p-6 border-r border-border">
        <CardTitle className="text-foreground">Bot Questions</CardTitle>
        <form
          onSubmit={onAddFilterQuestions}
          className="flex flex-col gap-6 mt-10"
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer to question"
              message="The answer for the question above"
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="answer"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-warning text-warning-foreground hover:bg-warning/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            <Loader loading={loading}>Create</Loader>
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <p
                key={question.id}
                className="font-bold text-foreground mb-3"
              >
                {question.question}
              </p>
            ))
          ) : (
            <CardDescription className="text-muted-foreground">No Questions</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  )
}

export default FilterQuestions