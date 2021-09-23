const { model, Schema } = require('mongoose');

const workoutSchema = new Schema(
    {
        day:
        {
            type: Date,
            default: () => new Date(),
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Please select a type of exercise.',
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Please enter the name of the exercise.',
                },
                duration: {
                    type: Number,
                    required: 'Please enter the duration of exercise performed.'
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);



module.exports = model('Workout', workoutSchema);